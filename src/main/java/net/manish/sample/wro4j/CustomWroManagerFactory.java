package net.manish.sample.wro4j;

/**
 * @author Manish
 */
import ro.isdc.wro.manager.factory.BaseWroManagerFactory;
import ro.isdc.wro.model.group.GroupExtractor;


public class CustomWroManagerFactory extends BaseWroManagerFactory {

  @Override
  protected GroupExtractor newGroupExtractor() {
    // TODO Auto-generated method stub
    return new CustomDefaultGroupExtractor();
  }
}
