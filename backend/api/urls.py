from django.urls import path
from . import views

urlpatterns = [
    path("notes/", views.NoteListView.as_view(), name="notes"),
    path("delete/<int:pk>/", views.NoteDestroy.as_view(), name="delete-note"),
]
