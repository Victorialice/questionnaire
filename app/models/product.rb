class Product < ActiveRecord::Base
  #attr_accessor :name, :price, :released_at
  
  def self.search(search)
    if search
      where('name LIKE ?', "%#{search}%")
    else
      self
    end
  end
end
