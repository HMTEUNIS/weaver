class StrandSerializer < ActiveModel::Serializer
  attributes :id, :words, :lat, :lng
end
