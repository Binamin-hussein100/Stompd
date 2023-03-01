class SessionsController < ApplicationController
    def create
        user = User.find_by(email: params[:email])
        if user && user.authenticate(params[:password])
            
            token = JWT.encode({user_id: user.id},Rails.application.secrets.secret_key_base)
            pp token
            render json: {token: token}
        else
            render json: {error: "Invalid password or password"}, status: :unprocessable_entity
        end
    end

    def destroy
        session[:user_id] = nil
        render json: {message: 'Successfully Logged in'}
    end

    private
    def session_params
        params.require(:session).permit(:eamil, :password)
    end
end
