from django.conf.urls import include
from django.conf.urls import url
from django.contrib import admin
from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from companies import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('music/', include('music.urls')),
    url(r'^stocks/',views.StockList.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)