require 'test_helper'

class I18nUnitTest < Test::Unit::TestCase
  include Liquid

  def setup
    @i18n = I18n.new
  end

  def test_assign_error
    assert_equal "Syntax Error in 'assign' - Valid syntax: assign [var] = [source]", @i18n.translate("errors.syntax.assign")
  end

  def test_extends_error
    assert_equal "Syntax Error in 'extends' - Valid syntax: extends [template]", @i18n.translate("errors.syntax.extends")
  end

  def test_inherited_block_error
    assert_equal "Syntax Error in 'block' - Valid syntax: block [name]", @i18n.translate("errors.syntax.inherited_block")
  end

end