module Database

  def self.connect
    if ENV['ENVIRONMENT'] == 'test'
      PG.connect(dbname: 'makersbnb_test')
    else
      PG.connect(dbname: 'makersbnb')
    end

  end

end
