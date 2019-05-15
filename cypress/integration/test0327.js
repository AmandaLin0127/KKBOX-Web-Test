context('Portal Test', () => {
  beforeEach(() => {
  	// demo3758@kkbox.com
    cy.setCookie('token', 'V0005XRyr550000000000000000000100000000000000000000000000012f49', {path: '/', domain: 'portal.kkbox.com'})
      .visit('https://portal.kkbox.com/listen-with/');
  });

  // chartroom
  const nameOfDJ = 'div.chat-room-profile .name';

  // main
  const celebrityActionOverlay = 'div.verified-users div.avatar div.action-overlay';
  const popularDJActionOverlay = 'div.top-channels div.avatar div.action-overlay';
  const celebrityName = 'div.verified-users div.name';
  const officialFollowButton = 'div.official-channels div.program-card .action';
  const creatorName = 'div.creator-name';
  const DJName = 'div.channel-creator div.name';
  const mainPage = 'div.nav-menu';

  // profile
  const profileName = 'div.user div.profile-main';
  const DJprofileName = 'div.chat-room-profile div.profile-main';
  const broadcastButton = 'div.broadcast-setting-form div.action-buttons';
  const sendButton = 'div.message-input-toolbar';

  // sharing
  const copyUrl = '.sb-copybox-action';
  const facebookSharingButton = 'button.sb-btn-social-block.sb-btn-facebook';

  it('Get', () => {
    cy.get(creatorName).eq(0).invoke('text').then((name) => {
      
      cy.get(popularDJActionOverlay).eq(0).invoke('show').find('button').click();
      cy.get(profileName).invoke('text').then((profileName) => {
        expect(name.trim()).to.equal(profileName.trim());
      });

    });
  });

  it('Invoke Show Button', () => {

    cy.get(popularDJActionOverlay).eq(0).invoke('show').find('button').click();
  });

  it('Follow Different DJ', () => {
    
    cy.get(DJName).eq(0).invoke('text').then((name) => {
      
      cy.get(celebrityActionOverlay).eq(0).invoke('show').find('button').click();
      cy.get(profileName).invoke('text').then((DJprofileName) => {
        expect(name.trim()).to.equal(DJprofileName.trim());
      });

    });
    cy.get(mainPage).contains('Main Page').click();
    cy.get(DJName).eq(1).invoke('text').then((name) => {
      
      cy.get(celebrityActionOverlay).eq(1).invoke('show').find('button').click();
      cy.get(profileName).invoke('text').then((DJprofileName) => {
        expect(name.trim()).to.equal(DJprofileName.trim());
      });

    });
    
  });

  it.only('Chatroom', () => {
    cy.visit('https://portal.kkbox.com/listen-with/start-broadcast');
    cy.get(broadcastButton).contains('Go On Air').click();
    cy.get('form').within(() => {
      cy.get('input').type('1');
      cy.get(sendButton).click();
      cy.get('input').type('2');
      cy.get(sendButton).click();
    })
  });


});
