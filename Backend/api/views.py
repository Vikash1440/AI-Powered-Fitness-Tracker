from openai import OpenAI
import google.generativeai as genai
from django.shortcuts import render
from rest_framework.response import Response
from .serializers import BMIRecordSerializer
from rest_framework.decorators import api_view
from .models import BMIRecord
from rest_framework import status
from rest_framework.generics import ListAPIView


class save_bmi(ListAPIView):
    queryset=BMIRecord.objects.all()
    serializer_class=BMIRecordSerializer

@api_view(['POST'])
def addbmi(request):
   serializer=BMIRecordSerializer(data=request.data)
   if serializer.is_valid():
       serializer.save()
       return Response(serializer.data,status=status.HTTP_201_CREATED)
   return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def deletbmi(request,pk):
  try:
     bmirecord=BMIRecord.objects.get(pk=pk)
  except BMIRecord.DoesNotExist:
     return Response(status=status.HTTP_404_NOT_FOUND)
  bmirecord.delete()
  return Response(status=status.HTTP_204_NO_CONTENT)
     
     
################  gemini Ai feature  ####################
genai.configure(api_key="AIzaSyBF6dkyXKsTSh40ljggnIsEKKrxtD6c9Zs")

@api_view(['POST'])
def generateTips(request):
   bmi=request.data.get("bmi")
   status=request.data.get("status")
  
   print("bmi",bmi)
   print("status",status)

   # models = genai.list_models()
   # for model in models:
   #    print(model.name)

   if not bmi or not status:
      return Response({"error":"BMi and Status are required."}, status=400)
   
   prompt=f"""
   
You are a friendly fitness coach helping beginners get healthier.

My BMI is {bmi}, and my health status is categorized as {status}.

Please respond with:
1. Three simple and beginner-friendly fitness tips. 
2. Two easy-to-follow diet suggestions (mention common foods).

Speak like you're explaining it to a friend, using clear and encouraging words. 
Avoid medical terms. No technical jargon. Keep your answer short and positive.
    
    """
   try:
       model = genai.GenerativeModel(model_name="gemini-1.5-flash")
       response = model.generate_content(prompt)
       cleaned_text = response.text.replace("**", "")
       return Response({"tips": cleaned_text})
      #return Response({"tips": response.text})
   except Exception as e:
       print("OpenAI ERROR:",str(e))
       return Response({"error":str(e)},status=500)