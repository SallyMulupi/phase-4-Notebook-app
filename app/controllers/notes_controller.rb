class NotesController < ApplicationController
def show 
    note=find_note
    render json: note, status: :ok
end
def index
    render json: Note.all, status: :ok
    
end
def create
    note=Note.create!(note_params)
    render json: note, status: :created
end
def update
    note=find_note
    note.update!(note_params)
    render json: note, status: :accepted
end
def destroy
    note=find_note
    note.destroy
    head :no_content		
end

private
def not_found_response
    render json: {error:"note not found"}, status: :not_found
end
def find_note
    Note.find (params[:id])
end
def note_params
    params.permit(:title, :content)
end
end
