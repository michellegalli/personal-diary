import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { BookmarksComponent } from './bookmark/bookmarks/bookmarks.component';
import { TodosComponent } from './todo-folder/todos/todos.component';
import { NotesComponent } from './note/notes/notes.component';
import { BookmarkTileComponent } from './bookmark/bookmark-tile/bookmark-tile.component';
import { AddNoteComponent } from './note/add-note/add-note.component';
import { NoteCardComponent } from './note/note-card/note-card.component';
import { EditNoteComponent } from './note/edit-note/edit-note.component';
import { TodoItemComponent } from './todo-folder/todo-item/todo-item.component';
import { AddTodoComponent } from './todo-folder/add-todo/add-todo.component';
import { EditTodoComponent } from './todo-folder/edit-todo/edit-todo.component';
import { AddBookmarkComponent } from './bookmark/add-bookmark/add-bookmark.component';
import { ManageBookmarksComponent } from './bookmark/manage-bookmarks/manage-bookmarks.component';
import { EditBookmarkComponent } from './bookmark/edit-bookmark/edit-bookmark.component';
@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    BookmarksComponent,
    TodosComponent,
    NotesComponent,

    BookmarkTileComponent,

    AddNoteComponent,
    AddTodoComponent,
    AddBookmarkComponent,

    NoteCardComponent,

    EditNoteComponent,
    EditTodoComponent,
    EditBookmarkComponent,

    TodoItemComponent,

    ManageBookmarksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
