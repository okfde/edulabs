require 'rake'
require 'rake/testtask'

require_relative "lib/liquid/template_inheritance/version"

task :default => 'test'

desc 'run test suite'
Rake::TestTask.new(:test) do |t|
  t.libs << '.' << 'lib' << 'test'
  t.test_files = FileList['test/{integration,unit}/**/*_test.rb']
  t.verbose = false
end

task :gem => :build
task :build do
  system "gem build liquid-template-inheritance.gemspec"
end

task :install => :build do
  system "gem install liquid-template-inheritance-#{Liquid::TemplateInheritance::VERSION}.gem"
end

task :release => :build do
  system "git tag -a v#{Liquid::TemplateInheritance::VERSION} -m 'Tagging #{Liquid::TemplateInheritance::VERSION}'"
  system "git push --tags"
  system "gem push liquid-template-inheritance-#{Liquid::TemplateInheritance::VERSION}.gem"
  system "rm liquid-template-inheritance-#{Liquid::TemplateInheritance::VERSION}.gem"
end
