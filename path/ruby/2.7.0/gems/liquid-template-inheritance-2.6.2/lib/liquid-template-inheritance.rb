require 'liquid'

require 'liquid/template_inheritance/i18n'

Dir[File.dirname(__FILE__) + '/liquid/template_inheritance/{tags,drops}/*.rb'].each { |f| require f }