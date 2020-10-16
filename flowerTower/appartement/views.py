from django.shortcuts import render

def confirmer(request):
    return render(request, 'account/confirmed.html')
