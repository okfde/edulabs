# -*- encoding: utf-8 -*-
# stub: liquid-template-inheritance 2.6.2 ruby lib

Gem::Specification.new do |s|
  s.name = "liquid-template-inheritance".freeze
  s.version = "2.6.2"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Didier Lafforgue".freeze, "Arnaud Sellenet".freeze, "Joel Azemar".freeze]
  s.date = "2015-07-01"
  s.description = "Liquid addon that enables template inheritance".freeze
  s.email = ["did@locomotivecms.com".freeze, "arnaud@sellenet.fr".freeze, "joel.azemar@gmail.com".freeze]
  s.homepage = "https://github.com/locomotivecms/liquid-template-inheritance".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.3.5".freeze
  s.summary = "This is an addon for the liquid templating engine, that adds the ability to inherit from templates".freeze

  s.installed_by_version = "3.3.5" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_development_dependency(%q<bundler>.freeze, ["~> 1.5"])
    s.add_development_dependency(%q<rake>.freeze, ["~> 10.1"])
  else
    s.add_dependency(%q<bundler>.freeze, ["~> 1.5"])
    s.add_dependency(%q<rake>.freeze, ["~> 10.1"])
  end
end
