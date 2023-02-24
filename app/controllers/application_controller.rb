class ApplicationController < ActionController::API
    before_action :authenticate_request

    private
    def authenticate_request
        header = request.headers['Authorization']
        token = header.split(' ').last if header
        begin
            decoded = JSON.decode(token, Rails.application.secrets.secret_key_base)
            @current_user_id = decoded.first['user_id']
        rescue JWT::DecodeError
            render json: {error: 'Invalid token'}, status: :unauthorized
        end
    end

    def current_user
        @current_user || User.find_by(id: @current_user_id)
    end

    def logged_in?
        !!current_user
    end
end
