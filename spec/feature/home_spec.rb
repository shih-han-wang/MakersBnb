feature 'home page content' do
  scenario 'welcomne' do
    visit '/'
    expect(page).to have_content 'Welcome!'
  end
end

feature 'button takes user to properties page' do
  scenario 'properties page' do
    visit '/'
    click_button 'View Properties'
    expect(page).to have_content 'Available Properties'
  end
end

feature 'button takes user to adding properties page' do
  scenario 'add property' do
    visit '/properties'
    click_button 'Add Property'
    expect(page).to have_content 'Enter your property details here'
  end
end

feature 'form to add properties' do
  scenario 'submit button' do
    visit '/addproperty'
    expect(page).to have_button 'submit'
  end
end

feature 'form to add properties' do
  scenario 'see a text entry field' do
    visit '/addproperty'
    expect(page).to have_field 'property'
  end
end

feature 'add property and see the display' do
  scenario 'use form add property' do
    visit '/addproperty'
    fill_in('username', :with => 'abc')
    fill_in('property', :with => 'Lovely Home')
    fill_in('description', :with => 'This is a very beautiful house')
    fill_in('price', :with => '55')
    click_button 'submit'
    expect(page). to have_link 'Lovely Home'
  end
end

feature 'see individual property' do
  scenario 'click link' do
    visit '/properties'
    click_link 'Lovely Home'
    expect(page). to have_content 'Lovely Home'
  end
end
