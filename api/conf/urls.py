"""
URL configuration for conf project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from django.urls import re_path

from revproxy.views import ProxyView


class User:
    def __init__(self, kwargs):
        self.email = kwargs.get('email')

def lol(request):
    # print(request.COOKIES)
    from django.http import HttpResponse
    # print(1)
    # print(request.user)
    # print(2)
    # from apps.users.models import User
    # from django.contrib.sessions.models import Session
    # Session.objects
    # print(User.objects.all())
    import requests
    response = requests.get('http://127.0.0.1:5000/api/me/', cookies=request.COOKIES)
    user = User(response.json())
    print(user.email)
    return HttpResponse(user.email)

urlpatterns = [
    path('', lol),
    # re_path(r'admin/(?P<path>.*)', ProxyView.as_view(upstream='http://127.0.0.1:5000/admin/',add_x_forwarded=True)),
    path('admin/', admin.site.urls),
]
