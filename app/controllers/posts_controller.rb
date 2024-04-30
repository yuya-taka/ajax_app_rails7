class PostsController < ApplicationController
  def index
    @posts = Post.order(id: "DESC")
  end

  def new
  end

  def create
    # binding.pry
    # Post.create(content: params[:content])
    post = Post.create(content: params[:content])
    # redirect_to action: :index
    render json:{ post: post}
  end
end
