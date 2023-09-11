#!/usr/bin/env ruby
require 'time'
Dir.glob('**/*.md') do |name|
  mtime = File.mtime(name)
  content = File.read(name)
  if content =~ /^---\n/
    idx = content.index('---', 4)
    front_matter = content[4...idx]
    if front_matter =~ /last_modified_at: /
      front_matter.gsub!(/last_modified_at: .*/, "last_modified_at: #{mtime.utc.iso8601}")
    else
      front_matter += "last_modified_at: #{mtime.utc.iso8601}\n"
    end
    File.write(name, content[0, 4] + front_matter + content[idx .. -1])
  end
end