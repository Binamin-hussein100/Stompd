require 'rails_helper'

RSpec.describe "Auths", type: :request do
  describe "POST /authenticate" do
    it 'authenticates the client' do
      post '/api/v1/authenticate', params: {username: 'BinAmin', password:'123445'}

      expect(response).to have_http_status(:created)
      expect(response.content_type).to eq('application/json; charset=utf-8')
      response_body = JSON.parse(response.body)
      expect(response_body).to eq({
        'token' => '123'
      })
    end
    it 'returns error when username is missing' do 
      post '/api/v1/authenticate', params: {password:'123445'}
      expect(response).to have_http_status(:unprocessable_entity)
      expect(response.content_type).to eq('application/json; charset=utf-8')
      response_body = JSON.parse(response.body)
      expect(response_body).to eq({
        "error"=>"param is missing or the value is empty: username"
      })

    end
    
    it 'return error when password is missing' do
      post '/api/v1/authenticate', params: {username: 'BinAmin'}
      expect(response).to have_http_status(:unprocessable_entity)
      expect(response.content_type).to eq('application/json; charset=utf-8')
      response_body = JSON.parse(response.body)
      expect(response_body).to eq({
        "error"=>"param is missing or the value is empty: password"
      })
    end
  end
end
