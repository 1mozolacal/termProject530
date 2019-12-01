from django.conf.urls import include
from django.conf.urls import url
from django.contrib import admin
from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
#from companies import views
#from pictures import views

urlpatterns = [
    path('', include('frontend.urls')),
    path('',include('pictures.urls')),
    #path('admin/', admin.site.urls),
    #url(r'^stocks/',views.StockList.as_view()),
    #url(r'^pics/',views.PicList.as_view()),
]

#urlpatterns = format_suffix_patterns(urlpatterns)