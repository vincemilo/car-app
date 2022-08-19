class Car < ApplicationRecord
  has_many :variants, dependent: :destroy
  accepts_nested_attributes_for :variants,
    reject_if: :all_blank, allow_destroy: true
end
