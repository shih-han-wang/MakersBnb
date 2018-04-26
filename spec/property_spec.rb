require 'property'
require 'pg'

describe Property do

  let(:subject) { described_class.new(id: 1, username: 'user', property: 'home1', description: 'This is a beautiful house', price: '£178') }

  it 'should store the id' do
    expect(subject.id).to eq 1
  end

  it 'should store the username' do
    expect(subject.username).to eq 'user'
  end

  it 'should store the property name' do
    expect(subject.property).to eq 'home1'
  end

  it 'should store the description' do
    expect(subject.description).to eq 'This is a beautiful house'
  end

  it 'should store the property price' do
    expect(subject.price).to eq '£178'
  end



end
