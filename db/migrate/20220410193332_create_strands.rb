class CreateStrands < ActiveRecord::Migration[6.1]
  def change
    create_table :strands do |t|
      t.text "words"
      t.float "lat"
      t.float "lng"
      t.timestamps
    end
  end
end
