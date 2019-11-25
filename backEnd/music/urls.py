#from django.urls import path
from . import views
from django.conf.urls import url
#create view here

urlpatterns = [
    #path(r'^$', views.index, name='index'),
    url(r'^$', views.index, name='index'),
    #need to change the first var
    url(r'^(?P<album_id>[0-9]+)/$',views.detail,name='detail'),

]
