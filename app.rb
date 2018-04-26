require 'sinatra'


class Makersbnb < Sinatra::Base

  get '/' do
    erb :index
  end

  get '/properties' do
    erb :properties
  end

  get '/addproperty' do
    erb :addproperty
  end


  run! if app_file == $0
end
