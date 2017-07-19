module Jekyll

  class RawContent < Generator

    def generate(site)
			site.documents.each do |post|
				if post.collection.label == 'project-edit'
        	post.data['raw_content'] = post.content
				end
      end
    end
  
  end

end
