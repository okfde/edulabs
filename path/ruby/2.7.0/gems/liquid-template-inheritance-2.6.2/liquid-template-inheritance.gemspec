# encoding: utf-8
lib = File.expand_path('../lib/', __FILE__)
$:.unshift lib unless $:.include?(lib)

require "liquid/template_inheritance/version"

Gem::Specification.new do |spec|
  spec.name          = 'liquid-template-inheritance'
  spec.version       = Liquid::TemplateInheritance::VERSION
  spec.authors       = ['Didier Lafforgue', 'Arnaud Sellenet', 'Joel Azemar']
  spec.email         = ['did@locomotivecms.com', 'arnaud@sellenet.fr', 'joel.azemar@gmail.com']
  spec.description   = %q{Liquid addon that enables template inheritance}
  spec.summary       = %q{This is an addon for the liquid templating engine, that adds the ability to inherit from templates}
  spec.homepage      = 'https://github.com/locomotivecms/liquid-template-inheritance'
  #spec.repo          = 'https://github.com/locomotivecms/liquid-template-inheritance'
  spec.license       = 'MIT'

  spec.files         = `git ls-files`.split($/)
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ['lib']

  spec.add_development_dependency 'bundler', '~> 1.5'
  spec.add_development_dependency 'rake', '~> 10.1'
  # spec.add_development_dependency 'liquid', '~> 2.6.1'
  # spec.required_ruby_version = '~> 2.0.0'
end
