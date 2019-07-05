"""myproject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
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

urlpatterns = [
    path('admin/', admin.site.urls),
]


from dicomapp import views
from django.urls import path
from django.conf.urls import url

from django.contrib import admin
from django.urls import path, include 
from django.views.generic.base import TemplateView

from django.conf import settings
from django.conf.urls import url, include
from django.conf.urls.static import static

from dicomapp import views

from django.conf.urls import url
from django.contrib import admin
from django.contrib.auth import views as auth_views




urlpatterns = [
    path('', TemplateView.as_view(template_name='index.html'), name='index'),
		
	path('register', views.register, name='register'),
    
	#path('login', views.login,name='login'),
	#path('logout', views.login,name='logout'),
	
	#path('login', auth_views.login, name='login'),
    #path('logout', auth_views.logout, name='logout'),
	#path('register', views.register,name='register'),
      
	path('about', views.AboutPageView.as_view(), name='about'),
	path('contact', views.ContactPageView.as_view(), name='contact'),
	path('directions', views.DirectionsPageView.as_view(), name='directions'),
	path('contactform', views.contact, name='contactform'),
	path('map', views.MapPageView.as_view(), name='map'),
	path('admin/', admin.site.urls),
	path('accounts/', include('accounts.urls')),
    path('accounts/', include('django.contrib.auth.urls'))

]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

