class CreateSellers < ActiveRecord::Migration[5.1]
  def change
    create_table :sellers do |t|

      t.timestamps
    end
  end
end
