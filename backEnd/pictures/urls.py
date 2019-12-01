from rest_framework import routers
from .api import PicViewSet

router = routers.DefaultRouter()
router.register('api/pictures',PicViewSet,'pictures')

urlpatterns = router.urls
