class UsersController < ApplicationController
    def create
        user User.new(user_params)
        if user.save
            render json: user, status: :created
        else
            render json: user.errors, status: :unprocessable_entity
        end
    end

    def index
        @sneakers = User.all
    
        render json: @sneakers
      end
    

    private
    def user_params
        params.require(:user).permit(:email, :password)
    end
end
