# app/controllers/api/v1/users_controller.rb
module Api::V1
  class UsersController < ApiController
    before_action :authenticate, except: [:signin,:signup]

    def index
      render json: User.all
    end

    def show
      render json: User.find_by(api_key: params[:api_key])
    end

    def signin
      @user = User.signin(users_params)
    	if @user.present?
    		render json: { user: @user, authenticated: true }
  		else
  			render json: { user: @user, authenticated: false }, status: :unprocessable_entity
      end
    end

    def signup
    	@user = User.new(users_params)
    	if @user.save
    		render json: { user: @user, registered: true }, status: :created
  		else
  			render json: { user: @user, registered: false }, status: :unprocessable_entity
      end
    end

    private

    	def users_params
    		params.require(:user).permit(:email,:password)
    	end

  end
end