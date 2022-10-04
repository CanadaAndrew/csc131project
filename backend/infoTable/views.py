from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def onLoad(request):
    return HttpResponse("This is the infoTable thing.")