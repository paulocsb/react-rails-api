Rails.application.routes.draw do
  scope module: 'api' do
		# /v1/users
    namespace :v1 do
      resources :users, param: :api_key
      post :signin, to: "users#signin"
	    post :signup, to: "users#signup"
    end
  end
end
