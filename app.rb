require 'sinatra'
require './lib/property'


class Makersbnb < Sinatra::Base

  get '/' do
    erb :index
  end

  get '/properties' do
    @properties = Property.all
    erb :properties
  end

  get '/addproperty' do
    erb :addproperty
  end

  post '/adding' do
    Property.create(username: params[:username], property: params[:property], description: params[:description], price: params[:price])
    redirect '/properties'
  end


  run! if app_file == $0
end
