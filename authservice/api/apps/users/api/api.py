from api import api
from ninja import ModelSchema
from apps.users.models import User


class UserSchema(ModelSchema):
    class Meta:
        model = User
        exclude = ['password']


@api.get('/me/', response=UserSchema)
def me(request):
    return request.user
