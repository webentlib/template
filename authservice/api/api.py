from django.conf import settings
from ninja import NinjaAPI

api = NinjaAPI(csrf=True, title='VMPortal API', openapi_url=settings.DEBUG and '/openapi.json' or '')
