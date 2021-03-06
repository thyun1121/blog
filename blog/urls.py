from django.conf.urls import url
from . import views

urlpatterns = [
	url(r'^$',views.post_list, name='post_list'),
	url(r'^posit/(?P<pk>[0-9]+)/$', views.post_detail, name='post_detail'),
	url(r'^post/new/$', views.post_new, name='post_new'),
	url(r'^post/(?P<pk>[0-9]+)/edit/$', views.post_edit, name='post_edit'),
    url(r'^profile/$', views.profile_page, name='profile_page'),
    url(r'^crawling/$', views.crawling_page, name='crawling_page'),
	url(r'^post/newMarkdown/$',views.post_new, name='post_new_markdown' ),
]
