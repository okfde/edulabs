module Jekyll

  class CategoryPage < Page
    def initialize(site, base, dir, theme, theme_num, type)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'

      self.process(@name)
      self.read_yaml(File.join(base), 'dw.html')
      self.data['theme'] = theme
      self.data['theme_num'] = theme_num
      self.data['layout'] = 'dw'
      self.data['type'] = type
      self.data['collection'] = 'dwi'

#      category_title_prefix = site.config['category_title_prefix'] || 'Category: '
#      self.data['title'] = "#{category_title_prefix}#{category}"
      #
    end
  end

  class CategoryPageGenerator < Generator
    safe true

    def generate(site)
      # Gennerate Digitale Kompetenzen pages
      dir = 'dw/digitale_kompetenzen'
      site.data['digitalen_welt']['themes'].each_with_index do |theme, i|
        site.pages << CategoryPage.new(site, site.source, File.join(dir, (i + 1).to_s), theme['name'], i + 1, 'kmk')
      end

      # Gennerate Fächergruppen pages
      dir = 'dw/fachergruppen'
      site.data['digitalen_welt']['fachergruppen'].each_with_index do |fg, i|
        site.pages << CategoryPage.new(site, site.source, File.join(dir, (i + 1).to_s), fg['name'], i + 1, 'fach')
      end

      # Gennerate Medieneinsatz pages
      dir = 'dw/medieneinsatz'
      site.data['digitalen_welt']['medieneinsatz'].each_with_index do |me, i|
        site.pages << CategoryPage.new(site, site.source, File.join(dir, (i + 1).to_s), me['name'], i + 1, 'medien')
      end

    end
  end

end
