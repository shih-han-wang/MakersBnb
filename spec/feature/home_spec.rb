feature "home page content" do
  scenario 'welcomne' do
    visit '/'
    expect(page).to have_content 'Welcome!'
  end
end
