module Liquid
  class I18n

    TEMPLATE_INHERITANCE_DEFAULT_LOCALE = File.join(File.expand_path(File.dirname(__FILE__)), "locales", "en.yml")

    def locale_with_template_inheritance
      if @path != DEFAULT_LOCALE
        # we assume that the developers already included the keys concerning the template inheritance.
        locale_without_template_inheritance
      else
        # memoization
        return @locale if @locale

        default = locale_without_template_inheritance
        addon   = YAML.load_file(TEMPLATE_INHERITANCE_DEFAULT_LOCALE)

        deep_merge(addon, default)
      end
    end

    alias_method :locale_without_template_inheritance, :locale
    alias_method :locale, :locale_with_template_inheritance

    private

    def deep_merge(locale_1, locale_2)
      merger = proc { |key, v1, v2| Hash === v1 && Hash === v2 ? deep_merge(v1, v2) : v2 }
      locale_1.merge(locale_2, &merger)
    end

  end
end