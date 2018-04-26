require 'pg'
require_relative './database.rb'

class Property

  attr_reader :id, :username, :property, :description, :price

  def initialize(options)
    @id = options[:id]
    @username = options[:username]
    @property = options[:property]
    @description = options[:description]
    @price = options[:price]
  end

  def self.create(options)
  con = Database::connect
  con.exec "INSERT INTO properties (username, property, description, price) VALUES ('#{options[:username]}', '#{options[:property]}', '#{options[:description]}', '#{options[:price]}')"
  end

  def self.all
    con = Database::connect
    con.exec('SELECT * FROM properties').map do |property|
      Property.new(
        id: property['id'],
        username: property['username'],
        property: property['property'],
        description: property['description'],
        price: property['price'])
    end
  end


end
