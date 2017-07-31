module Jekyll
  module SanitizeFilter
    def sanitize(input)
      cinput = input
      cinput = cinput.gsub(%r![^\w\s-]+|(?<=^|\b\s)\s+(?=$|\s?\b)!, "".freeze)
      cinput = cinput.gsub(%r!\s+!, "_")
      cinput
    end
  end
end

Liquid::Template.register_filter(Jekyll::SanitizeFilter)

