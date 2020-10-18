# from channels.routing import ProtocolTypeRouter

# application = ProtocolTypeRouter({
#     # Empty for now (http->django views is added by default)
# })


from channels.routing import ProtocolTypeRouter, URLRouter
from django.urls import path
from appartement.consumers import NoseyConsumer

application = ProtocolTypeRouter({
    "websocket": URLRouter([
        path("notifications/", NoseyConsumer),
    ])
})