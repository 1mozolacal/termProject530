from django.http import HttpResponse
from .models import Album
from django.template import loader


#Index function get data from data base
#best not to have html in python file
def index(request):
    all_albums= Album.objects.all() # this is the line to get all data from that db

    #html = ''  #formating the html tags
    #for album in all_album: # Loop through each element in database and print out the name and link to the page where it contain details of the item
    #    url = '/music/'+str(album.id) +'/'
    #    html += '<a href = "'+url+'">'+album.album_title+'</a><br>'

    template = loader.get_template('music/index.html')
    context = {
        'all_albums': all_albums,
    }
    return HttpResponse(template.render(context,request))

def detail(request, album_id):
    return HttpResponse("<h2>Details for Album id: " + str(album_id)+ "</h2>")