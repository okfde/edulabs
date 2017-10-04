module Jekyll

  class RawContent < Generator

    def generate(site)
      site.documents.each do |post|
        if (post.respond_to? :collection)
          if post and post.collection.label == 'project-edit' or post.collection.label == 'dw'
            post.data['raw_content'] = post.content
          end
        end
      end
    end
  
  end

end
