require 'rails_helper'

RSpec.describe "Auths", type: :request do
  describe "POST /authenticate" do
    it 'authenticates the client' do
      post '/api/vi/authenticate'
    end
  end
end
