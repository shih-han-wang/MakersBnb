feature "home page content" do
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
