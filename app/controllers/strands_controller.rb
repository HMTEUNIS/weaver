class StrandsController < ApplicationController

    def index
        render json: Strand.all, status: :ok
    end
    def show
        render json: Strand.find(params[:id]), status: :ok
    end
    def create
        new_post = Strand.create!(post_params)
        render json: new_post, status: :created
    end
    def update
        @strand = Strand.find(params[:id])
       updated =  @strand.update(post_params)
       render json: updated, status: :ok


      end

    private

    def post_params
        params.permit(:words, :id, :lat, :lng)
    end
end
